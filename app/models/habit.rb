class Habit < ApplicationRecord
  validates :name, presence: true
  validates :status, presence: true,
    inclusion: {
      in: %w(in progress on hold completed),
      message: "that status is not valid."
    }
end
