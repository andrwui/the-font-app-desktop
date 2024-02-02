export const requestLocalFontsPermission = async (): Promise<void> => {
  try {
    // Check if the 'fonts' permission is available (it may not be supported in all browsers)
    if (!navigator.permissions) {
      throw new Error('Local font query is not supported in your browser.')
    }

    // Query the permission status for local fonts
    const permissionStatus = await navigator.permissions.query({
      name: 'local-fonts' as PermissionName,
    })

    // Check the current permission state
    if (permissionStatus.state === 'granted') {
      return
    } else if (permissionStatus.state === 'prompt') {
      console.log('Requesting permission to access local fonts...')
      window.queryLocalFonts()
    } else if (permissionStatus.state === 'denied') {
      console.log('Permission to access local fonts has been denied.')
    }
    permissionStatus.onchange = () => {
      console.log(
        `The permission state for local fonts has changed to ${permissionStatus.state}`,
      )
      if (permissionStatus.state === 'granted') {
        window.location.reload()
      }
    }
  } catch (error) {
    console.error('Error requesting local fonts permission:', error)
  }
}
