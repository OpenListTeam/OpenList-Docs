#!/usr/bin/env node
import { existsSync } from 'fs'
import simpleGit from 'simple-git'

const git = simpleGit()

/**
 * Restores complete Git history for shallow clones to fix contributor tracking issues.
 */
async function checkAndRestoreHistory() {
  try {
    // Check if current directory is a Git repository
    if (!existsSync('.git')) {
      throw new Error('Not a Git repository.')
    }

    // Detect if repository is a shallow clone
    const isShallow = await git.raw('rev-parse', '--is-shallow-repository')

    if (isShallow.trim() === 'true') {
      console.log('➤ Detected shallow clone. Trying to fetch full history for current branch...')

      // Get current branch name
      const branch = await git.branch()
      const currentBranch = branch.current

      // Fetch complete history for current branch only
      await git.raw('fetch', '--unshallow', 'origin', currentBranch)
      console.log(`✓ Full history restored for branch: ${currentBranch}`)
    } else {
      console.log('✓ Repository already has complete history')
    }
  } catch (error) {
    console.error('❌ Failed to restore Git history:', error.message)
    // process.exit(1)
    console.warn(
      '! This may result in incomplete contributor information in `valaxy-addon-git-log`. Consider manually running: git fetch --unshallow'
    )
  }
}

// Execute the main function
checkAndRestoreHistory()
