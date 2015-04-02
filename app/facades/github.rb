require 'octokit'

class Github

  def initialize(user)
    Octokit.auto_paginate = true
    @client = Octokit::Client.new(access_token: ENV['GITHUB_ACCESS_TOKEN'])
    @user = @client.user user
  end

  attr_reader :user, :client, :language_lists

  def repos
    @client.repositories('idknox')
  end

  def recent_repos
    repos.sort_by { |repo| repo.updated_at }.reverse.take(5)
  end

  def languages
    language_lists = repos.map { |repo| repo.rels[:languages].get.data }
    languages = {}

    language_lists.each do |list|
      languages = languages.merge(list) { |k, old, new| old+new }
    end

    languages.map { |k, v| {name: k, y: v} }.inspect
  end
end
