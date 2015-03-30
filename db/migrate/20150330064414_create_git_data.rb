class CreateGitData < ActiveRecord::Migration
  def change
    create_table :git_data do |t|
      t.string :languages

      t.timestamps
    end
  end
end
