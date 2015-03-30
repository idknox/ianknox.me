module HomepageHelper
  def formatted_date(date)
    date.strftime('%B %eth')
  end
end