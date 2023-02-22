class ApplicationController < ActionController::API
    # before_action :authorized
    def encode_token(payload)
        JWT.encode(payload, 'my_secret')
    end
end
