module.exports = {
  'host': 'foo',
  'port': process.env.PORT || 3030,
  'postgres': process.env.DATABASE_URL || 'postgres://postgres@docker:5432/nightlife',
  'public': '../../../dist',
  'auth': {
    'idField': 'id',
    'token': {
      'secret': process.env.JWT_SECRET || 'MNwt5daxH3V3YqSj7oBb1frMQnswG/1N+hGbRNxkLOaSDMrNr12+I4VcrckpkVnyhUxFv2uVMZZnT/kGm+wBiQ=='
    }
  },
  'local': {}
}
