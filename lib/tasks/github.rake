namespace :github do
  desc 'updates github languages'
  task lang: :environment do
    github = Github.new('idknox')
    GitData.create!(languages: github.languages)
  end
end