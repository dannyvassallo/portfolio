class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  protect_from_forgery with: :exception

  rescue_from Pundit::NotAuthorizedError, with: :permission_denied

  def permission_denied
    flash[:error] = "Get out of there!"
    self.response_body = nil # This should resolve the redirect root.
    redirect_to(request.referrer || root_path)
  end
   
end
