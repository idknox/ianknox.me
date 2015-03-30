module HomepageHelper
  def formatted_date(date)
    date.strftime('%B %eth, %Y at %l:%m %p')
  end
end