const slugify = string => string
	.toLowerCase()
	.replace(/\s/g, '-')
  .replace(/[^a-z0-9-]/g, '')

const formatDate = dateStr => {
  const date = new Date(Date.parse(dateStr + 'T01:00:00'))
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ][date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}

export { slugify, formatDate }