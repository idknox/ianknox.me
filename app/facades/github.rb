require 'octokit'

class Github

  def initialize(user)
    client = Octokit::Client.new(:access_token => ENV['GITHUB_ACCESS_TOKEN'])
    @user = client.user user
  end

  attr_reader :user, :repos, :language_lists

  def repos
    @user.rels[:repos].get.data
  end

  def languages
    language_lists = repos.map { |repo| repo.rels[:languages].get.data }
    languages = {}

    language_lists.each do |list|
      languages = languages.merge(list) { |k, old, new| old+new }
    end
    sums = languages.values.reduce(:+)
    languages.each { |k, v| languages[k] = ((v/sums.to_f)*100).round(2) }
    languages.to_a
  end
end
