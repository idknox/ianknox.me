class HomepageController < ApplicationController
  def show
    @github = Github.new('idknox')
  end

  def github_chart
    render json: Github.new('idknox').languages
  end
end