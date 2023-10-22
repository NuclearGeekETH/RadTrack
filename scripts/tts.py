"""Synthesizes speech from the input string of text or ssml.
Make sure to be working in a virtual environment.

Note: ssml must be well-formed according to:
    https://www.w3.org/TR/speech-synthesis/
"""
from google.cloud import texttospeech

# Instantiates a client
client = texttospeech.TextToSpeechClient()



text1 = "In the healthcare industry, there is a gap concerning the tracking and sharing of radiation dose data. A patient or professional may receive a radiation dose at Hospital A, but upon moving to Hospital B or C, their dose history fails to follow them. This lack of continuity poses a risk, given the dose limits that professionals must adhere to annually and the potential dangers faced by patients undergoing numerous high-dose exams. A comprehensive view of an individual’s dose history is vital for informed decision-making regarding future exams. To tackle this problem, we’ve launched RadTrack."
text2 = "RadTrack leverages blockchain technology and NFTs to provide an innovative solution for radiation dose tracking. Connecting your digital wallet to RadTrack allows you to tokenize a patient record. Each hospital would be set up with admin access so they can mint patients and add dose to a patient record. Each mint and dose write requires a small amount of cryptocurrency which funds the program. We also accept alternative payment methods such as ApeCoin."
text3 = "RadTrack allows you or a patient to review dose history using live data fed directly from the smart contract. We developed this platform from scratch using Next.js and Solidity with a mobile first mentality, ensuring an easy to use UI."
text4 = "Each patient’s record is complemented with unique metadata and images that are dynamically rendered on our platform. You can also review these patient records via OpenSea or any other marketplace that is compatible with blockchain."
text5 = "For an in-depth exploration of our submission, visit our project page. You can also access our GitHub for a detailed understanding of RadTrack. We’ve developed the application using Next.js with the pages router, styled with tailwind, along with a custom smart contract, all written from the ground up."
text6 = "Our team is composed of NuclearGeek aka Shawn Pickett, a radiation safety expert slash full stack developer with nearly 15 years of experience in the radiology industry, alongside Mizz Lady, our exceptionally talented UI/UX designer. We jointly brought RadTrack to life, truly unifying radiation safety and advanced blockchain capabilities."
text7 = "Adding dose to a patient record has been simplified by our UI. Just enter the patient ID, the exam name, click the date and time, then write the data. We also allow the use of ApeCoin but any ERC20 token we approve could be used in the transaction. This is just as easy to do on mobile as desktop, by the way. This transaction is being done in real time without any edits. This part of the process would be automated in a real-world implementation."
text8 = "Our UI is designed for patient and healthcare professional access while each component is also built as its own page allowing direct access to only what is needed."

run = 8
track_run = text8

# Set the text input to be synthesized
synthesis_input = texttospeech.SynthesisInput(text=track_run)


# Build the voice request, select the language code ("en-US") and the ssml
# voice gender ("neutral")
voice = texttospeech.VoiceSelectionParams(
    language_code="en-US",
    name="en-US-Studio-M",
    ssml_gender=texttospeech.SsmlVoiceGender.MALE,
)

# Select the type of audio file you want returned
audio_config = texttospeech.AudioConfig(
    audio_encoding=texttospeech.AudioEncoding.MP3
)

# Perform the text-to-speech request on the text input with the selected
# voice parameters and audio file type
response = client.synthesize_speech(
    input=synthesis_input, voice=voice, audio_config=audio_config
)


audio_file = f"radtrack_{run}.mp3"

# The response's audio_content is binary.
with open(audio_file, "wb") as out:
    # Write the response to the output file.
    out.write(response.audio_content)
    print(f"Audio content written to file {audio_file}")