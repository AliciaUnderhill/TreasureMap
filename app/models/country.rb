# == Schema Information
#
# Table name: countries
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Country < ApplicationRecord

  validates :name, presence: true

  has_many :cities,
    class_name: :City,
    foreign_key: :country_id

  has_many :articles,
    through: :cities,
    source: :articles

  include PgSearch
  multisearchable :against => [:name], using: {
    tsearch: {
      prefix: true
    }
  }

  def self.top_countries_by_article_count
    Country.select('countries.*').joins(:cities).joins(:articles).group('countries.id').order('COUNT(articles.id) DESC').limit(6)
  end

  def self.existing_country(country_name)
    Country.find_by(name: country_name)
  end

end
