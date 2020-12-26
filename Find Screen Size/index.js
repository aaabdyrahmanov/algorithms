function findScreenHeight(width, ratio) {
    const a = ratio.split(':')
    return `${width}x${width/Number(a[0])*Number(a[1])}`
 }

    /**
   * 
   * findScreenHeight(1024,"4:3"), "1024x768"
   *     
   * findScreenHeight(3840,"32:9"), "3840x1080"
   * 
   * findScreenHeight(1280,"16:9"), "1280x720"
   * 
   */