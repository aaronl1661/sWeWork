from openai import OpenAI

client = OpenAI()

topic = "web scraper"
completion = client.chat.completions.create(model="gpt-3.5-turbo", 
messages=[{"role": "user", "content": "Write code for a " + topic + " with one bug and one feature that needs to be implemented"}])

print(completion)