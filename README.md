phoneformat.js
==============

Javascript Phone Number Formatter


ant -f libphonenumber/java/build.xml build-js-metadata

cp libphonenumber/javascript/i18n/phonenumbers/metadata.js libphonenumber/javascript/i18n/phonenumbers/phonenumber.pb.js libphonenumber/javascript/i18n/phonenumbers/phonemetadata.pb.js libphonenumber/javascript/i18n/phonenumbers/regioncodefortesting.js libphonenumber/javascript/i18n/phonenumbers/phonenumberutil.js libphonenumber/javascript/i18n/phonenumbers/asyoutypeformatter.js phoneformat/

closure-library/closure/bin/build/closurebuilder.py --root=closure-library/ --root=phoneformat --namespace="phoneformat.start" --output_mode=compiled --compiler_jar=compiler.jar --compiler_flags="--output_wrapper_file" --compiler_flags="output_wrapper.js" --compiler_flags="--compilation_level" --compiler_flags="ADVANCED_OPTIMIZATIONS" > phoneformat_de_at_ch.js 

