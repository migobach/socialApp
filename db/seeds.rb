50.times do
  Post.create( 
    body: Faker::ChuckNorris.fact, 
    author: Faker::FunnyName.name
  )
end

puts "You are so smart!"