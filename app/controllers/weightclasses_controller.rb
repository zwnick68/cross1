class WeightclassesController < ApplicationController
    def index
        render json: Weightclass.all
    end

    def show
        weightclass = find_weightclass
        render json: weightclass
    end

    private

   def find_weightclass
        Weightclass.find(params[:id])
   end

end
