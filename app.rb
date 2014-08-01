require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'sinatra/respond_with'
require 'sinatra/json'

configure do
  set :views, 'app/views'
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
end

get '/' do
  @movies = Movie.limit(10)

  if params[:search]
    @movies = @movies.where('title ILIKE ?', "%#{params[:search]}%")
  end

  respond_to do |format|
    format.html { erb :index }

    # This is the endpoing that the autocomplete will hit to get results
    # It returns a JSON hash representing all of the movies
    format.json { json @movies }
  end
end
