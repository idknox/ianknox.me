module HomepageHelper
  def formatted_date(date)
    date.strftime('%B %eth, %Y')
  end
end