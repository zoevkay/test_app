class AddPostsTable < ActiveRecord::Migration
  def up
    create_table :posts do |t|
      t.string :title, :null => false
      t.string :body, :null => false
      t.references :user
      t.timestamps
    end
  end

  def down
    drop_table :posts
  end
end
