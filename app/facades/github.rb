require 'octokit'

class Github

  def initialize(user)
    Octokit.auto_paginate = true
    client = Octokit::Client.new(access_token: ENV['GITHUB_ACCESS_TOKEN'])
    @user = client.user user
  end

  attr_reader :user, :repos, :language_lists

  def repos
    @user.rels[:repos].get.data
  end

  def recent_repos
    repos.sort_by { |repo| repo.created_at }.reverse[0..4]
  end

  def languages
    language_lists = repos.map { |repo| repo.rels[:languages].get.data }
    languages = {}
    final = []

    language_lists.each do |list|
      languages = languages.merge(list) { |k, old, new| old+new }
    end
    sum = languages.values.reduce(:+)
    languages.each do |k, v|
      final << {name: k, y: v}
    end
    final.inspect
  end
end
