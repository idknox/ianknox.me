namespace :github do
  desc 'updates github languages'
  task lang: :environment do
    github = Github.new('idknox')
    github.lang
  end
end