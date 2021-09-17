module ProductsHelper
  def print_stars(num)
    num = num.to_int
    stars_str = ""
    if num > 5 then
      num = 5
    end
    num.times do
      stars_str += render("full_star")
    end
    (5 - num).times do
      stars_str += render("empty_star")
    end
    stars_str.html_safe
  end
end
