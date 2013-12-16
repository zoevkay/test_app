class AddUsersTable < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :username, :null => false
      t.string :password, :null => false
      t.string :email
      t.string :name
      t.integer :age
    end
  end

  def down
    drop_table :users
  end
end
