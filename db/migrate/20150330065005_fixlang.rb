class Fixlang < ActiveRecord::Migration
  def change
    remove_column :git_data, :languages, :string
   add_column :git_data, :languages, :text
  end
end
