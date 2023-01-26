import { describe, expect, it } from 'vitest'
import { getImageFromTeam, PRESIDENTS, TEAMS, writeDBFile } from './index'

describe('testing db functionality', () => {
	it('saves data to JSON file', () => {
		writeDBFile('dummy', { data: 'dummy' })
	})
	it('teams  and presidents haves values', () => {
		expect(TEAMS).toBeDefined()
		expect(PRESIDENTS).toBeDefined()
	})
	it('returns team image', () => {
		const image = getImageFromTeam({ name: '1K FC' })
		expect(image).toBe('https://kings-league-project-134.pages.dev/teams/logos/1k.svg')
	})
})
