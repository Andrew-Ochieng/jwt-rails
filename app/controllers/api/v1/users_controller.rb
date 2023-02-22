class Api::V1::UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     user = User.find_by(id: params[:id])
    #     render json: user, status: :ok
    # end
    
    
    def create
        @user = User.create(user_params)
        if @user.valid?
            token = encode_token({ user_id: @user.id })
            render json: { user: @user, token: token }, status: :created, serializer: UserSerializer
        else
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)   
    end

    # def record_not_found
    #     render json: { error: "User not found" }, status: :not_found
    # end

    
    
end
