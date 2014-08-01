titles = File.readlines('db/fixtures/movies.txt').map(&:chomp)

titles.each do |title|
  Movie.find_or_create_by!(title: title)
end
