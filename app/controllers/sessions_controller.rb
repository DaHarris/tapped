class SessionsController < ApplicationController
  def create
    uid = env['omniauth.auth']['uid']
    session[:user_id] = uid
    user = User.find_or_create_by(oath_user_id: uid)
    user.update_attributes(username: env['omniauth.auth']['info']['nickname'])
    @token = user.update_attributes(token: env['omniauth.auth']['credentials']['token'])
    @secret = user.update_attributes(secret: env['omniauth.auth']['credentials']['secret'])
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
