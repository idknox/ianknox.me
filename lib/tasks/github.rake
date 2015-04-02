namespace :github do
  desc 'updates github languages'
  task lang: :environment do
    github = Github.new('idknox')
    g_data = GitData.last
    g_data.languages = github.languages
    g_data.save
  end
end