class HomepageController < ApplicationController
  def show
    puts '*' * 80
    puts ENV["GITHUB_ACCESS_TOKEN"]
    puts '*' * 80

    @github_data = Github.new('idknox')
  end

  def index
  end
end