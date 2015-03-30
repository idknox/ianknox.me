class HomepageController < ApplicationController
  def show
    @github = Github.new('idknox')
  end

  def github_chart
    render json: eval(GitData.all.last.languages)
  end
end