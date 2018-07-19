class Goal < ApplicationRecord
  validates :name, presence: true
  validates :status, presence: true,
    inclusion: {
      in: ["in progress", "on hold", "completed"],
      message: "that status is not valid."
    }
end
