const startTime = Date.now()

export default defineEventHandler((_event) => {
  return {
    message: `Server started successfully`,
    startTime,
  }
})
