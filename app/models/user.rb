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

  has_many(
    :items,
    foreign_key: :owner_id
  )

  attr_reader :password

  def self.generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
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

  def username
    # Convert empty stings into nils for conversion logic
    fname, lname = self.fname, self.lname
    fname = fname && fname.empty? ? nil : fname
    lname = lname && lname.empty? ? nil : lname

    if fname && lname
      "#{fname} #{lname}"
    else
      fname || lname || email
    end
  end
end
