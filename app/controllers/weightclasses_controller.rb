class WeightclassesController < ApplicationController
    def index
        render json: Weightclass.all
    end
end
