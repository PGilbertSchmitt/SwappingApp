class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials( 
      params[:user][:email],
      params[:user][:password]
    )
    p params[:user][:email]
    p params[:user][:password]

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
      # render json: @user.errors.fullmessages, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: nil
    else
      render nothing: true, status: 404
    end
  end
end
