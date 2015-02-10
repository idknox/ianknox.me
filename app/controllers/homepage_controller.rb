class HomepageController < ApplicationController
  def show
    @github_data = Github.new('idknox')
  end

  def index
  end
end