module.exports = {
    startKeybaord: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
            ]
        })
    },
    inlineKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
                [{text: "", callback_data: ""}],
            ]
        })
    }
}