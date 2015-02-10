require "open-uri"

class Github

  def initialize(user)
    @user = user
    @user_data = get_data
    @repos = get_repos
  end

  attr_reader :user_data, :repos

  def updated_repos
    @repos[0..4]
  end

  private

  def get_data
    file = open('https://api.github.com/users/' + @user + '?access_token=' + ENV['GITHUB_ACCESS_TOKEN']) { |f| f.read }
    JSON.parse(file)
  end

  def get_repos
    all_pages = []
    (1..4).each do |page_number|
      file = open(
        'https://api.github.com/users/' +
          @user +
          '/repos' +
          '?page=' +
          page_number.to_s +
          '&sort=updated&access_token=' +
          ENV['GITHUB_ACCESS_TOKEN']
      ) { |f| f.read }
      all_pages += JSON.parse(file)
    end
    all_pages
  end
end