class PostsController < ApplicationController

  def show
    @user = current_user
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    authorize @post
  end

  def edit
    @post = Post.find(params[:id])
    authorize @post
  end

  def update
    @user = current_user
    @post = @user.posts.find(params[:id])
    authorize @post
    if @post.update_attributes(post_params)
      flash[:notice] = "Post was updated."
      redirect_to @post
    else
      flash[:error] = "There was an error saving the post. Please try again."
      render :edit
    end
  end

  def create
    @user = current_user
    @post = @user.posts.build(post_params)
    authorize @post
    if @post.save
      flash[:notice] = "Post was saved."
      redirect_to @post
    else
      flash[:error] = "There was an error saving the post. Please try again."
      render :new
    end
  end

  private
 
   def post_params
     params.require(:post).permit(:title, :body, :label)
   end

end
