require "open-uri"

class Github

  def initialize(user)
    @user = user
    @user_data = get_data
    @repos = get_repos
  end

  attr_reader :user_data, :repos


  def get_data
    file = open('https://api.github.com/users/' + @user + '?access_token=' + ENV['GITHUB_ACCESS_TOKEN']) { |f| f.read }
    JSON.parse(file)
  end

  def get_repos
    file = open('https://api.github.com/users/' + @user + '/repos?access_token=' + ENV['GITHUB_ACCESS_TOKEN']) { |f| f.read }
    JSON.parse(file)
  end
end