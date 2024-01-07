const formatDate = (date, opts = {}) => {
  return new Date(date).toLocaleDateString('pt-BR', opts)
}

export { formatDate }
