# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string
#  lname           :string
#  address         :string
#  phone_number    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_save :downcase_email

  has_many(
    :items,
    foreign_key: :owner_id
  )

  has_many(
    :outgoing_trades,
    class_name:  :Trade,
    foreign_key: :requester_id
  )

  has_many(
    :incoming_trades,
    class_name:  :Trade,
    foreign_key: :receiver_id
  )

  attr_reader :password

  def self.generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email.downcase)
    user && user.is_password?(password) ? user : nil
  end

  def downcase_email
    self.email.downcase!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end

  def reset_session_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  # Rubocop says this function has a high complexity, but I tried to be as
  # brief as possible
  def username
    # Convert empty attr strings into nils for conversion logic
    fname, lname = self.fname, self.lname
    fname = fname && fname.empty? ? nil : fname
    lname = lname && lname.empty? ? nil : lname

    if fname && lname
      # if both names are available, combines them
      "#{fname} #{lname}"
    else
      # Otherwise, uses whichever name is available, or, given they're both
      # unavailable, uses the user's email
      fname || lname || email
    end
  end
end
