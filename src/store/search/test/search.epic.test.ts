import { isSearchTermLongerThan } from '../search.epic'

test('Search term is longer than 5 char', () => {
  // Arrang
  const searchTerm = 'Dexter'

  // Act
  const result = isSearchTermLongerThan(5)(searchTerm)

  // Assert
  expect(result).toBe(true)
})

test('Search term is less than 5 char', () => {
  // Arrang
  const searchTerm = '24'

  // Act
  const result = isSearchTermLongerThan(5)(searchTerm)

  // Assert
  expect(result).toBe(false)
})
