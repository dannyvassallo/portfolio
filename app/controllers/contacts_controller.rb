class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = 'Thank you for your message. I will contact you as soon as possible!'
      redirect_to root_path
    else
      flash[:error] = 'There was an error validating your message. Try again.'
      redirect_to root_path
    end
  end
end