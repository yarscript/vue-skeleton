import sendFeedback from "@/modules/http/api/feedback/sendFeedback";

export default {
    sendFeedback: async function ({ state, commit, getters }, { feedback }) {
        sendFeedback(feedback)
    },
};
