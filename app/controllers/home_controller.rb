class HomeController < ApplicationController
  def index
    @posts = Post.all
    @contact = Contact.new
  end
end
