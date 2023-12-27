import json
import re

FILES_TO_BUMP = [
    'app.json',
    'android/app/build.gradle'
]

for file in FILES_TO_BUMP:
    with open(file, 'r') as f:
        contents = f.read()
        if re.findall(r'.json$', file):
            contents = json.loads(contents)
            contents['expo']['android']['versionCode'] += 1
            contents = json.dumps(contents, indent = 2)
        else:
            new_version = int(re.findall('versionCode\s\d*', contents)[0].split(' ')[1]) + 1
            contents = re.sub('versionCode\s\d*', f"versionCode {new_version}", contents)
    with open(file, 'w') as f:
        f.write(contents)
            