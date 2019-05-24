
export const success = (that,message) => {
    return that.$Message.success(message)
}
export const warning = (that,message) => {
    return  that.$Message.warning(message)
}

export const error = (that,message) => {
    return that.$Message.error(message)
}